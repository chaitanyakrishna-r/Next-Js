import dns from "node:dns";
import { connect } from "mongoose";


dns.setServers(["8.8.8.8"]);

console.log("DNS servers:", dns.getServers());

try {
  const records = await dns.promises.resolveSrv(
    "_mongodb._tcp.cluster0.nzubnzs.mongodb.net"
  );

  console.log("SRV lookup successful:", records);
} catch (error) {
  console.error("SRV lookup failed:", error);
}
