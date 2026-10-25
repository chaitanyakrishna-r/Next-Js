
import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import User from '@/model/user.model'
import connectDb from "@/config/db";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";




const authOptions:NextAuthOptions={

    providers:[
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                email: {label:"Email", type:'text'},
                password: {label:'Password',type:'password'}
            },
            async authorize(credentials,req){

                const email = credentials?.email;
                const password = credentials?.password;

                if(!email || !password){
                    throw new Error("email or password is missing");
                }


                await connectDb();
                const user = await User.findOne({email});

                if(!user){
                     throw new Error('user not found')
                }
                const isPasswordCorrect =await bcrypt.compare(password, user.password);

                if(!isPasswordCorrect){
                    throw new Error("email or password is not correct!")
                }
                //so basically we need to return a object from authorize function we return infor about user
                return{
                    id: user._id,
                    name: user.username,
                    email:user.email,
                    image: user.image,
                }
            }
            }),
        Google ({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })    
            
    ],

    // at this point after credentialProvider is excuted a token is genereated 
    callbacks:{
        //using jwt function we put infor about user into token object so that we can access this from cookies in frontend


        async signIn({account, user}){

            
            console.log("i am from signIn callback",user)
            if(account?.provider =="google"){

                await connectDb();
                const existUser =  await User.findOne({email: user?.email});
                
                if(!existUser){
                    const newUser = await User.create({
                        name: user?.name,
                        email: user?.email
                    })
                    user.id = newUser._id
                }
            }
            return true;
        },

        async jwt({token,user}){
            if(user){

                token.id = user.id;
                token.name = user.name
                token.email = user.email
                token.image = user.image
            }

            return token;
        },


        //this second callback called session
        // the purpose of this is to put token info into token so that in frontend we can access this info using useSession
        session({session,token}){
            if(session.user){
                session.user.id = token.id as string
                session.user.email = token.email
                session.user.name = token.name
                session.user.image = token.image as string
            }
            return session;
        }

    },
    session:{
        //
        strategy:'jwt',
        maxAge: 7 * 24 * 60 * 60 * 1000
    },
    pages:{
        signIn: '/login',
        
        error: '/login'
    },
    secret:process.env.NEXTAUTH_SECRET
}
export default authOptions;