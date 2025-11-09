import React, {useState} from "react";
import axios from "axios";

export default function CreativeForm(){
  const [form,setForm] = useState({name:'', email:'', phone:'', message:''});
  const [status,setStatus] = useState('');
  const [loading,setLoading] = useState(false);

  const change = e => setForm({...form, [e.target.name]: e.target.value});

  const validateEmail = email => /\S+@\S+\.\S+/.test(email);

  const submit = async e => {
    e.preventDefault();
    setStatus('');
    if(!form.email){ setStatus('⚠️ Email is required'); return; }
    if(!validateEmail(form.email)){ setStatus('⚠️ Enter a valid email'); return; }
    setLoading(true);
    try{
      const res = await axios.post('https://vernanbackend.ezlab.in/api/contact-us/', form, {timeout:8000});
      if(res.status === 200 || res.status === 201){
        setStatus('✅ Form Submitted');
        setForm({name:'', email:'', phone:'', message:''});
      } else {
        setStatus('❌ Submission failed');
      }
    }catch(err){
      console.error(err?.response?.data || err.message);
      setStatus('❌ Submission failed');
    }finally{ setLoading(false); }
  };

  return (
    <form onSubmit={submit} className="card p-6 rounded-2xl border border-white/6">
      <div className="grid sm:grid-cols-2 gap-3">
        <input name="name" value={form.name} onChange={change} placeholder="Full name" className="p-3 rounded-md bg-transparent border border-white/8 text-white placeholder-slate-400" />
        <input name="email" value={form.email} onChange={change} placeholder="Email *" className="p-3 rounded-md bg-transparent border border-white/8 text-white placeholder-slate-400" required />
      </div>
      <div className="mt-3">
        <input name="phone" value={form.phone} onChange={change} placeholder="Phone" className="w-full p-3 rounded-md bg-transparent border border-white/8 text-white placeholder-slate-400" />
      </div>
      <div className="mt-3">
        <textarea name="message" value={form.message} onChange={change} rows="4" placeholder="Short message" className="w-full p-3 rounded-md bg-transparent border border-white/8 text-white placeholder-slate-400"></textarea>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <button type="submit" disabled={loading} className="bg-primary px-5 py-3 rounded-md text-white font-semibold shadow hover:brightness-105">
          {loading? 'Submitting...':'Send Message'}
        </button>
        <div className="text-sm hint">{status}</div>
      </div>
    </form>
  )
}
