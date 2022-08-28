import { NextApiRequest, NextApiResponse } from "next";

export type NextController = (req: NextApiRequest, res: NextApiResponse) => void;
