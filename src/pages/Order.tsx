import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';
import { cn } from '../lib/utils';

interface OrderProps {
  cart: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const Order: React.FC<OrderProps> = ({ cart, updateQuantity, removeFromCart, clearCart }) => {
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = deliveryMethod === 'delivery' ? 200 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    clearCart();
  };

  if (step === 'success') {
    return (
      <div className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 rounded-[40px] text-center max-w-lg w-full"
        >
          <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 text-gold">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4">Order Placed!</h2>
          <p className="text-paper/60 mb-8">
            Your order has been received and is being prepared with care. We'll notify you when it's ready for {deliveryMethod}.
          </p>
          <Link
            to="/"
            className="inline-block bg-gold text-ink px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          {step === 'checkout' && (
            <button onClick={() => setStep('cart')} className="p-2 hover:text-gold transition-colors">
              <ArrowLeft size={24} />
            </button>
          )}
          <h1 className="text-4xl md:text-6xl font-serif font-bold">
            {step === 'cart' ? 'Your ' : 'Complete '}
            <span className="gold-gradient">{step === 'cart' ? 'Cart' : 'Order'}</span>
          </h1>
        </div>

        {cart.length === 0 && step === 'cart' ? (
          <div className="text-center py-32 glass-card rounded-[40px]">
            <ShoppingBag size={64} className="mx-auto text-paper/20 mb-6" />
            <h2 className="text-3xl font-serif font-bold mb-4 text-paper/40">Your cart is empty</h2>
            <Link
              to="/menu"
              className="inline-block bg-gold text-ink px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Cart Items or Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {step === 'cart' ? (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="glass-card p-6 rounded-3xl flex items-center gap-6"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 rounded-2xl object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-grow">
                        <h3 className="text-xl font-serif font-bold mb-1">{item.name}</h3>
                        <p className="text-paper/40 text-sm mb-2">{item.category}</p>
                        <span className="text-gold font-bold">PKR {item.price}</span>
                      </div>
                      <div className="flex items-center gap-4 bg-white/5 rounded-full px-4 py-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-paper/60 hover:text-gold transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-bold w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-paper/60 hover:text-gold transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-3 text-paper/20 hover:text-chinese-red transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <form id="checkout-form" onSubmit={handleCheckout} className="glass-card p-8 md:p-12 rounded-[40px] space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-paper/40">Full Name</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-paper/40">Phone Number</label>
                      <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-paper/40">Delivery Address</label>
                    <textarea required rows={3} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-paper/40">Payment Method</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl border-2 border-gold bg-gold/10 flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-4 border-gold bg-ink"></div>
                        <span className="font-bold">Cash on Delivery</span>
                      </div>
                      <div className="p-4 rounded-2xl border-2 border-white/10 bg-white/5 flex items-center gap-3 opacity-50 cursor-not-allowed">
                        <div className="w-5 h-5 rounded-full border-2 border-white/20"></div>
                        <span className="font-bold">Card (Coming Soon)</span>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Summary */}
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-[40px] sticky top-32">
                <h3 className="text-2xl font-serif font-bold mb-8">Order Summary</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-paper/60">
                    <span>Subtotal</span>
                    <span>PKR {subtotal}</span>
                  </div>
                  <div className="flex justify-between text-paper/60">
                    <span>Delivery Fee</span>
                    <span>PKR {deliveryFee}</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-gold">PKR {total}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <label className="text-xs font-bold uppercase tracking-widest text-paper/40">Method</label>
                  <div className="flex gap-2 p-1 bg-white/5 rounded-full">
                    <button
                      onClick={() => setDeliveryMethod('delivery')}
                      className={cn(
                        "flex-1 py-2 rounded-full text-sm font-bold transition-all",
                        deliveryMethod === 'delivery' ? "bg-gold text-ink" : "text-paper/60 hover:text-paper"
                      )}
                    >
                      Delivery
                    </button>
                    <button
                      onClick={() => setDeliveryMethod('pickup')}
                      className={cn(
                        "flex-1 py-2 rounded-full text-sm font-bold transition-all",
                        deliveryMethod === 'pickup' ? "bg-gold text-ink" : "text-paper/60 hover:text-paper"
                      )}
                    >
                      Pickup
                    </button>
                  </div>
                </div>

                {step === 'cart' ? (
                  <button
                    onClick={() => setStep('checkout')}
                    className="w-full bg-gold hover:bg-gold-dark text-ink py-4 rounded-2xl font-bold text-lg uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <CreditCard size={20} />
                    Checkout
                  </button>
                ) : (
                  <button
                    form="checkout-form"
                    type="submit"
                    className="w-full bg-chinese-red hover:bg-red-800 text-white py-4 rounded-2xl font-bold text-lg uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Place Order
                  </button>
                )}
                
                <p className="text-center text-paper/40 text-xs mt-6">
                  Secure checkout powered by CNS Systems
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
