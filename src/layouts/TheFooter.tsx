import { Typography, Container, IconButton } from '@mui/material';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function TheFooter() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <Container maxWidth="lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-xs">
              Q
            </div>
            <Typography variant="body1" className="font-bold text-white tracking-tight">
              NexusUI
            </Typography>
          </div>
          
          <Typography variant="body2" className="text-slate-400">
            © {new Date().getFullYear()} NexusUI. All rights reserved.
          </Typography>

          <div className="flex gap-4">
            <IconButton size="small" className="text-slate-400 hover:text-white">
              <Github size={20} />
            </IconButton>
            <IconButton size="small" className="text-slate-400 hover:text-white">
              <Twitter size={20} />
            </IconButton>
            <IconButton size="small" className="text-slate-400 hover:text-white">
              <Linkedin size={20} />
            </IconButton>
          </div>
        </div>
      </Container>
    </footer>
  );
}
