import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: "1", name: "Natalia" },
    { id: "1", name: "Alucard" },
    { id: "1", name: "Eren" },
  ];

  return response.json(users);
};

