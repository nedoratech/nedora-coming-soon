import React from 'react';
import { MailIcon, ArrowRightIcon, CheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';
interface SubscriptionFormProps {
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  submitted: boolean;
}
export function SubscriptionForm({
  email,
  setEmail,
  handleSubmit,
  submitted
}: SubscriptionFormProps) {
  return <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center bg-white rounded-full shadow-md p-1">
          <div className="pl-4">
            <MailIcon size={20} className="text-slate-400" />
          </div>
          <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="w-full py-3 px-3 outline-none text-slate-600 placeholder-slate-400 rounded-full" required />
          <motion.button type="submit" className={`rounded-full py-3 px-6 font-medium text-white flex items-center justify-center ${submitted ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700'}`} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} transition={{
          duration: 0.2
        }}>
            {submitted ? <>
                <CheckIcon size={18} className="mr-1" /> Subscribed
              </> : <>
                Notify Me <ArrowRightIcon size={18} className="ml-1" />
              </>}
          </motion.button>
        </div>
      </form>
      <p className="text-sm text-slate-500 mt-3">
        We'll notify you when we launch our new website.
      </p>
    </div>;
}