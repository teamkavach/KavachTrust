import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import IconCopy from '@tabler/icons-react/dist/esm/icons/IconCopy';
import IconCheck from '@tabler/icons-react/dist/esm/icons/IconCheck';
import IconDeviceMobile from '@tabler/icons-react/dist/esm/icons/IconDeviceMobile';
import IconHeart from '@tabler/icons-react/dist/esm/icons/IconHeart';
import IconSparkles from '@tabler/icons-react/dist/esm/icons/IconSparkles';
import IconBuildingBank from '@tabler/icons-react/dist/esm/icons/IconBuildingBank';
import IconShirt from '@tabler/icons-react/dist/esm/icons/IconShirt';
import IconBook from '@tabler/icons-react/dist/esm/icons/IconBook';
import IconUmbrella from '@tabler/icons-react/dist/esm/icons/IconUmbrella';
import IconSchool from '@tabler/icons-react/dist/esm/icons/IconSchool';
import IconBrandWhatsapp from '@tabler/icons-react/dist/esm/icons/IconBrandWhatsapp';
import IconMail from '@tabler/icons-react/dist/esm/icons/IconMail';

const Donate: React.FC = () => {
  useEffect(() => { document.title = 'Donate | Team Kavach'; }, []);

  const [copiedUPI, setCopiedUPI] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const UPI_ID = "9483481483.1@hdfc";
  const PHONEPE = "+91 9611438065";
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  const BANK = {
    name: 'KAVACH TRUST',
    account: '50200120171180',
    ifsc: 'HDFC0004000',
    bank: 'HDFC Bank',
  };

  const copyBankField = (value: string, field: string) => {
    navigator.clipboard.writeText(value);
    setCopiedBank(field);
    setTimeout(() => setCopiedBank(null), 2000);
  };

  const upiDeepLink = `upi://pay?pa=${UPI_ID}&pn=Kavach%20Trust&cu=INR&tn=Donation%20to%20Team%20Kavach`;

  const copyToClipboard = (text: string, type: 'upi' | 'account') => {
    navigator.clipboard.writeText(text);
    if (type === 'upi') {
      setCopiedUPI(true);
      setTimeout(() => setCopiedUPI(false), 2000);
    } else {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Matching site theme */}
      <section className="relative py-24 md:py-32 bg-[#DB143C] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <IconSparkles className="w-5 h-5" />
              <span className="text-sm font-bold">Every Rupee Counts </span>
            </div>
            
            <h1 className="text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Support Our Mission
              <br />
              <span className="text-secondary">Make a Difference</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Your donation helps us reach more communities and create lasting change.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Winter Relief Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                  <IconHeart className="w-4 h-4" />
                  Every Rupee Creates Change
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-2">
                  YOUR MONEY <span className="text-primary">DOES THIS</span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Here's what some popular amounts make possible — but every rupee you give matters.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { amount: '₹250', Icon: IconShirt,   label: 'Blanket + Food',   sub: 'Someone stays warm tonight because of you' },
                  { amount: '₹500', Icon: IconBook,    label: 'Exam Kit',         sub: 'A rural student walks in ready to dream' },
                  { amount: '₹1,000', Icon: IconUmbrella, label: 'Umbrella Drive', sub: 'A family shielded through the monsoon' },
                  { amount: '₹2,500', Icon: IconSchool, label: 'School Supplies', sub: 'A classroom stocked, futures unlocked' },
                ].map(({ amount, Icon, label, sub }) => (
                  <div key={amount} className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">Suggested</div>
                    <div className="text-xl sm:text-2xl font-black text-primary mb-1">{amount}</div>
                    <div className="text-sm font-bold text-foreground mb-1">{label}</div>
                    <div className="text-xs text-muted-foreground">{sub}</div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                💛 You can donate <span className="font-bold text-foreground">any amount you like</span> — ₹10 or ₹10,000, every contribution goes directly to those who need it most.
              </p>
            </div>
          </motion.div>

          {/* Payment Methods — side by side on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-stretch">
            {/* UPI Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 h-full">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#DB143C] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconDeviceMobile className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-foreground mb-1">UPI Payment</h3>
                  <p className="text-sm text-muted-foreground">Quick & Easy - Pay via any UPI app</p>
                </div>

                <div className="space-y-4">
                  {/* QR Code */}
                  <div className="flex flex-col items-center bg-gray-50 rounded-xl border border-gray-200 p-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-3">Scan to Pay — Any UPI App</p>
                    <img
                      src="/images/upi-qr.png"
                      alt="Team Kavach UPI QR Code"
                      className="w-44 h-44 rounded-xl object-contain"
                    />
                    <p className="text-xs text-muted-foreground mt-3">GPay · PhonePe · Paytm · BHIM · Any UPI app</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">UPI ID</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-base sm:text-lg font-bold text-foreground">{UPI_ID}</p>
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(UPI_ID, 'upi')}
                        className="bg-[#DB143C] hover:bg-[#b91133] text-white font-bold"
                      >
                        {copiedUPI ? <IconCheck className="w-4 h-4" /> : <IconCopy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  {/* PhonePe Number — temporarily hidden
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">PhonePe Number</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-base sm:text-lg font-bold text-foreground">{PHONEPE}</p>
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(PHONEPE, 'account')}
                        className="bg-[#DB143C] hover:bg-[#b91133] text-white font-bold"
                      >
                        {copiedAccount ? <IconCheck className="w-4 h-4" /> : <IconCopy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  */}

                  {/* UPI Deep Link - always visible, works on mobile */}
                  <div className="space-y-1.5">
                    <a
                      href={upiDeepLink}
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#DB143C] hover:bg-[#b91133] text-white font-bold rounded-xl transition-colors text-sm"
                    >
                      <IconDeviceMobile className="w-4 h-4" />
                      Open in UPI App
                    </a>
                    <p className="text-center text-xs text-muted-foreground">Works on mobile · GPay · PhonePe · Paytm · BHIM</p>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-xl">
                    <div className="text-sm text-muted-foreground space-y-1.5">
                      <p className="flex items-center gap-2">✓ Open any UPI app (GPay, PhonePe, Paytm)</p>
                      <p className="flex items-center gap-2">✓ Enter UPI ID</p>
                      <p className="flex items-center gap-2">✓ Send any amount you wish</p>
                      <p className="flex items-center gap-2">✓ Screenshot & WhatsApp us confirmation</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bank Account Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 h-full">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#DB143C] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconBuildingBank className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-foreground mb-1">Bank Transfer</h3>
                  <p className="text-sm text-muted-foreground">Direct NEFT / IMPS / RTGS</p>
                </div>

                <div className="space-y-3">
                  {([
                    { label: 'Account Name', value: BANK.name,    field: 'name' },
                    { label: 'Bank',         value: BANK.bank,    field: 'bank' },
                    { label: 'Account Number', value: BANK.account, field: 'account' },
                    { label: 'IFSC Code',    value: BANK.ifsc,    field: 'ifsc' },
                  ] as { label: string; value: string; field: string }[]).map(({ label, value, field }) => (
                    <div key={field} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">{label}</p>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-base font-bold text-foreground tracking-wide">{value}</p>
                        <Button
                          size="sm"
                          onClick={() => copyBankField(value, field)}
                          className="bg-[#DB143C] hover:bg-[#b91133] text-white font-bold flex-shrink-0"
                        >
                          {copiedBank === field ? <IconCheck className="w-4 h-4" /> : <IconCopy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>{/* end payment grid */}
          {/* After Payment Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-lg sm:text-xl font-black text-foreground mb-6 flex items-center gap-3">
                <IconHeart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Important: After Payment
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-[#DB143C] text-white flex items-center justify-center font-bold mb-3">1</div>
                  <p className="font-bold text-foreground text-sm">Take Screenshot</p>
                  <p className="text-xs text-muted-foreground mt-1">Payment confirmation</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-[#DB143C] text-white flex items-center justify-center font-bold mb-3">2</div>
                  <p className="font-bold text-foreground text-sm">WhatsApp Us</p>
                  <a href="https://wa.me/917892474801" className="text-xs text-primary font-semibold hover:underline mt-1">+91 7892474801</a>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-[#DB143C] text-white flex items-center justify-center font-bold mb-3">3</div>
                  <p className="font-bold text-foreground text-sm">Or Email</p>
                  <a href="mailto:kavachtrust@gmail.com" className="text-xs text-primary font-semibold hover:underline mt-1">kavachtrust@gmail.com</a>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-[#DB143C] text-white flex items-center justify-center font-bold mb-3">4</div>
                  <p className="font-bold text-foreground text-sm">Get Receipt</p>
                  <p className="text-xs text-muted-foreground mt-1">Within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center"
          >
            <h3 className="text-lg sm:text-xl font-black text-foreground mb-2">Need Help?</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Have questions about donations? Contact us anytime!
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/917892474801" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors"
              >
                <IconBrandWhatsapp className="w-5 h-5" /> WhatsApp
              </a>
              <a 
                href="mailto:kavachtrust@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#DB143C] hover:bg-[#b91133] text-white rounded-xl font-bold transition-colors"
              >
                <IconMail className="w-5 h-5" /> Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
