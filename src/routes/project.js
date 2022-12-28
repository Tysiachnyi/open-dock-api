const router = require("express").Router();
const Project = require("../models/Project");

// CREATE PROJECT
router.post("/create", async (req, res) => {
  const newProject = new Project(req.body);
  try {
    const savedProject = await newProject.save();
    res.status(200).json(savedProject);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE PROJECT
router.put("/update/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.authorId === req.body.authorId) {
      const updatedProject = await Project.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProject);
    } else {
      res.status(401).json("U can update only your project");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET PROJECT
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL PROJECT
router.get("/", async (req, res) => {
  let projects;
  try {
    if (req.query.authorId) {
      console.log(req.query.authorId);
      projects = await Project.find({ authorId: { $eq: req.query.authorId } });
    } else {
      projects = await Project.find();
    }
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
