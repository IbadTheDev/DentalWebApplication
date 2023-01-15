const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

//Route 1 : get all the notes using get "/api/notes/getallnotes" Login required
router.get("/getallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2 : add a new Note using Post "/api/notes/addnote" Login required
router.post("/addnote", fetchUser,
  [
    body("title", "Enter a valid title").isLength({min : 3}),
    body("description", "Write something").isLength({min : 3}),
  ],
  async (req, res) => {
    try {
        //breaking down the body to get data
      const { title, description, tag } = req.body;

      //return error for bad requests
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
        // an object containing all required data for a new note
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
