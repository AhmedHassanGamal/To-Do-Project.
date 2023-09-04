const todo = require("../models/todoSchema");

///find by item ///////
const AddAndFindTODO = async (req, res) => {
  const mytodo = await todo.find()
  if (!mytodo) {
    return res.status(400).send("todo Not Found");
  }
  res.status(200).render("index.ejs", { mytodo });
};

////create new item//////
const addtodo = async (req, res) => {
  const newtodo = await new todo({
    todo: req.body.todo,
    itemid: req.body.itemid,
  });
  newtodo
    .save()
    .then(() => {
     // res.redirect('/')
      res.status(200).send("Item add Success");
    })
    .catch((err) => {
      for (let e in err.errors) {
        console.log(err.errors[e].message);
        res.status(400).send("Bad Request ... ");
      }
    });
};

////delete item//////
const deletetodo = async (req, res) => {
  const Items = await todo.findOneAndDelete({ todo: req.params.todo });
  if (!Items) {
    return res.status(400).send("Cant find Item To dELTE");
  }
  res.status(200).send("Item Delted Success");
};

/////update item BY its id
const updatetodo = async (req, res) => {
  const Items = await todo.findOneAndUpdate(
    { itemid: req.body.itemid },
    { todo: req.body.todo }
  );
  if (!Items) {
    return res.status(400).send("We Can't Update");
  }
  res.status(200).send("Updated Success");
};

module.exports = { addtodo, AddAndFindTODO, updatetodo, deletetodo };
