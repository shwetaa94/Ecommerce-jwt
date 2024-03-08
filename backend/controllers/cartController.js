const { Cart } = require('../models/cart');

const addCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const {userId} = req;

    let cartItem = await Cart.findOne({ userId, productId });

    if (cartItem) {
      cartItem.quantity += 1;
      await cartItem.save();
    } 
    else {   
      cartItem = await Cart.create({
        quantity: 1,
        userId,
        productId,
      });
    }
    cartItem = await cartItem.populate('productId')
   res.status(201).json({ message: 'Item added to cart successfully', cartItem });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getCart= async(req,res)=>{
    try {
        const userId = req.userId;
    
        // Find cart items by user Id
        const cartItems = await Cart.find({ userId }).populate('productId');
    
        res.status(200).json({ cartItems });
      } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ message: 'Internal server error' });
      }


}
const updateCart = async (req, res) => {
    try {
      const {cartId} = req.params;
      const { quantity } = req.body;
  
      
      if (quantity === 0) {
        const deletedItem = await Cart.findByIdAndDelete(cartId);
        return res.status(200).json({ message: 'Cart item deleted successfully' , deletedItem});
      }
  
      const upatedItem = await Cart.findByIdAndUpdate(cartId, { quantity });
  
      res.status(200).json({ message: 'Cart item updated successfully'});
    } catch (error) {
      console.error('Error updating cart item:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

module.exports ={addCart,getCart,updateCart}


