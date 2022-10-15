import { NextApiHandler } from "next";
import { fetchJson } from "../../lib/api";

const CMS_URL = process.env.CMS_URL;

export type User = {
  id: number;
  name: string;
};

const handleUser: NextApiHandler<User> = async (req, res) => {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).end();
    return;
  }
  try {
    const user = await fetchJson(`${CMS_URL}/users/me`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    res.status(200).json({ id: user.id, name: user.username });
  } catch (error) {
    res.status(401).end();
  }
};

export default handleUser;
