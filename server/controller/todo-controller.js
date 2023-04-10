import Todo from '../model/Todo.js';


export const addTodo=async (req,res)=>{

    try {
   const newTodo=await Todo.create({
    data:req.body.data,
    createdAt: Date.now()
   });

   await newTodo.save();

     return  res.status(200).json(newTodo);

   }catch(err){
      return res.status(500).json(err.message);
   }
}


export const getAllTodos=async (req,res)=>{

   try {
      // sorting according to time in a descending mannner  
     const todos=  await Todo.find({}).sort({'createdAt':-1})
     return res.status(200).json(todos);
   
      }catch(err){
         return res.status(500).json(err.message);
      }

}