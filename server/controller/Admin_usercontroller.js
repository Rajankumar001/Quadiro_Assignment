const Item=require('../models/Item')
const AddItem=async(req,res)=>{
    if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });
    const { name, description } = req.body;
    try {
      const newItem = new Item({ name, description });
      await newItem.save();
      res.status(201).json(newItem);
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
}
const UpdateItem=async(req,res)=>{
    if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

    const { name, description } = req.body;
    try {
      const item = await Item.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
      res.json(item);
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }

}
const DeleteItem=async(req,res)=>{
    if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

    try {
      await Item.findByIdAndDelete(req.params.id);
      res.json({ msg: 'Item deleted' });
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }

}
// user_section
const getAllItem=async(req,res)=>{
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
}
const comment=async(req,res)=>{
  const { comments } = req.body;
  try {
    const item = await Item.findByIdAndUpdate(req.params.id,{comments},{new:true});
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
}
module.exports={
    AddItem,UpdateItem,DeleteItem,getAllItem,comment
}