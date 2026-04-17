    import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

export default function About() {
  const team = [
    { name: "Alex Chen", role: "Founder & CEO", initials: "AC" },
    { name: "Sarah Johnson", role: "Head of Design", initials: "SJ" },
    { name: "Michael Wong", role: "Lead Engineer", initials: "MW" }
  ];

  return (
    <div className="py-24 bg-white min-h-screen">
      <Container maxWidth="lg">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="text-center mb-20"
        >
          <Typography variant="h1" className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our Mission is to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Innovate</span>
          </Typography>
          <Typography variant="body1" className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We believe that beautiful, responsive, and incredibly fast user interfaces shouldn’t be a luxury. We're on a mission to bring premium aesthetics to developers everywhere using the tools they already love.
          </Typography>
        </motion.div>

        <Typography variant="h2" className="text-3xl font-bold text-slate-900 mb-10 text-center tracking-tight">
          Meet the Team
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {team.map((member, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
               <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="text-center p-6 border border-slate-100 shadow-lg rounded-3xl hover:shadow-xl transition-shadow bg-slate-50">
                  <CardContent>
                    <Avatar 
                      className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-3xl font-bold font-sans shadow-md"
                    >
                      {member.initials}
                    </Avatar>
                    <Typography variant="h5" className="font-bold text-slate-800">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" className="text-slate-500 font-medium">
                      {member.role}
                    </Typography>
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
