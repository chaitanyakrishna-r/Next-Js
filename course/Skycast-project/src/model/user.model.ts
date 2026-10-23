
import mongoose,{Schema} from 'mongoose';

interface Iuser{
    _id: mongoose.Types.ObjectId,
    username: string,
    image: string,
    email:string,
    password:string,
    createdAt?: Date,
    updatedAt?: Date

}


const userSchema = new Schema<Iuser>({
    username:String,
    email:{
        type:String,
        required: true,
        unique: true,
        MaxLength:[20,'email should be 20 characters']
    },
    password:{
        type:String,
        required: true,
        maxLength:[20, 'the password length should be less 20 '],
        minLength:[8, 'the password length should be more 8 ']

    },
    image:{
        type:String,

    }

},{
    timestamps: true
})


export default mongoose.models?.User || mongoose.model("User",userSchema);


