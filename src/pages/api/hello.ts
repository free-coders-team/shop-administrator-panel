import { NextController } from "@/typings/server/next-controller";

const helloWorld: NextController = (req, res) => {
  res.status(200).json("Hola mundo");
};

export default helloWorld;
