import Auth from '../model/auth.js';

// Get Auth by Name
export const getAuthByName = async (req, res) => {
  const { username, password } = req.body;

  try {
    const auth = await Auth.findOne({
      where: {
        username: username
      }
    });

    if (!auth) {
      return res.status(404).json({ error: 'Student login not found' });
    } else {
      if (password == auth.password) {
        res.status(200).json(auth);
      } else {
        return res.status(401).json({ error: 'Unauthorized: username password not matching' });
      }
    }
   
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

