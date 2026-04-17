import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: ["All Free Components", "Community Support", "Basic Documentation", "1 Project"],
      buttonText: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      features: ["Premium Components", "Priority Support", "Full Source Code", "Unlimited Projects"],
      buttonText: "Upgrade to Pro",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Custom Architecture", "Dedicated Manager", "SLA Guarantee", "On-premise deployment"],
      buttonText: "Contact Us",
      highlighted: false
    }
  ];

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <Container maxWidth="lg">
        <div className="text-center mb-16">
          <Typography variant="h1" className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Simple, transparent pricing
          </Typography>
          <Typography variant="body1" className="text-xl text-slate-500 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </Typography>
        </div>

        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {plans.map((plan, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card 
                  className={`relative p-4 rounded-[2rem] border ${plan.highlighted ? 'border-cyan-400 shadow-2xl shadow-cyan-500/20' : 'border-slate-200 shadow-lg'}`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      MOST POPULAR
                    </div>
                  )}
                  <CardContent className="p-8 pb-4">
                    <Typography variant="h5" className="font-bold text-slate-800 mb-2">
                      {plan.name}
                    </Typography>
                    <div className="flex items-baseline gap-1 mb-8">
                      <Typography variant="h3" className="font-extrabold text-slate-900 tracking-tight">
                        {plan.price}
                      </Typography>
                      {plan.period && (
                        <Typography variant="body1" className="text-slate-500 font-medium">
                          {plan.period}
                        </Typography>
                      )}
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-slate-600">
                          <CheckCircle2 className="text-cyan-500" size={20} />
                          <span className="font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.highlighted ? "contained" : "outlined"} 
                      color="primary"
                      fullWidth
                      size="large"
                      className={`rounded-full py-3 font-bold text-base ${plan.highlighted ? 'bg-slate-900 hover:bg-slate-800 !text-white' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
