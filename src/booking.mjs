export function whatsappUrl(number, {name='',service='Lama Fera healing',date='',time=''}={}) {
 const digits=number.replace(/[\s()+-]/g,'');
 if(!/^[1-9]\d{7,14}$/.test(digits)) return null;
 const message=`Hello, I visited your website and would like to enquire about ${service}.${name ? `\nName: ${name.trim()}`:''}${date ? `\nPreferred date: ${date}`:''}${time ? `\nPreferred time: ${time} (my local time; please confirm timezone)`:''}\nPlease confirm availability, session details and pricing. I understand this is an inquiry, not a confirmed appointment.`;
 return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
export function localDate(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
