import { AppBar, Toolbar, Typography, Button, Container, IconButton } from '@mui/material';
import { Globe, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navbarConfig } from '../config/navbar';

export default function TheHeader() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    // Optional chaining in case i18n isn't fully loaded
    const currentLang = i18n?.language || 'th';
    const newLang = currentLang === 'en' ? 'th' : 'en';
    i18n?.changeLanguage(newLang);
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      className="bg-white/80 backdrop-blur-lg border-b border-slate-200/50"
    >
      <Container maxWidth="xl">
        <Toolbar className="flex justify-between items-center px-0 min-h-[80px]">
          {/* Logo area */}
          <Link to="/" className="flex items-center gap-2 no-underline cursor-pointer mr-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center text-white font-bold shadow-md shadow-cyan-500/20">
              Q
            </div>
            <Typography variant="h6" className="font-extrabold text-slate-800 tracking-tight hidden lg:block">
              Nexus<span className="text-cyan-500">UI</span>
            </Typography>
          </Link>
          
          {/* Navbar Links Desktop */}
          <div className="hidden lg:flex items-center flex-1 justify-center gap-1">
            {navbarConfig.map((item, index) => {
              const isActive = item.path && location.pathname === item.path;
              
              if (item.type === 'mega' && item.children) {
                return (
                  <div key={index} className="relative group">
                    <Button 
                      color="inherit" 
                      className="text-slate-600 hover:text-cyan-600 font-medium px-3 py-2 rounded-lg whitespace-nowrap"
                      endIcon={<ChevronDown size={14} className="opacity-50 transition-transform group-hover:rotate-180" />}
                    >
                      {t(item.label)}
                    </Button>
                    
                    {/* Mega Menu Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block pt-4 z-50">
                      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 w-[800px] max-w-[90vw] relative">
                        {/* Triangle pointer */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {item.children.map((col, colIdx) => (
                            <div key={colIdx} className="flex flex-col">
                              <Typography variant="subtitle2" className="text-cyan-600 font-bold mb-4 tracking-tight border-b border-slate-100 pb-2">
                                {t(col.label)}
                              </Typography>
                              <div className="flex flex-col gap-3">
                                {col.children?.map((child, cIdx) => (
                                  <Link 
                                    key={cIdx} 
                                    to={child.path || '#'}
                                    className="text-slate-500 hover:text-cyan-600 no-underline text-sm font-medium transition-transform hover:translate-x-1 inline-block"
                                  >
                                    {t(child.label)}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.children) {
                return (
                  <div key={index} className="relative group">
                    <Button 
                      color="inherit" 
                      className="text-slate-600 hover:text-cyan-600 font-medium px-3 py-2 rounded-lg whitespace-nowrap"
                      endIcon={<ChevronDown size={14} className="opacity-50 transition-transform group-hover:rotate-180" />}
                    >
                      {t(item.label)}
                    </Button>
                    
                    {/* Standard Dropdown Menu */}
                    <div className="absolute top-full left-0 hidden group-hover:block pt-4 w-max z-50">
                      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-2 min-w-[280px] max-w-[360px] flex flex-col relative">
                        {/* Triangle pointer */}
                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45"></div>
                        
                        {item.children.map((child, cIdx) => (
                          <Link 
                            key={cIdx} 
                            to={child.path || '#'}
                            className="px-4 py-3 rounded-xl text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 no-underline text-sm font-medium transition-colors border border-transparent hover:border-cyan-100"
                          >
                            {t(child.label)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Button 
                  key={index}
                  component={Link} 
                  to={item.path || '#'}
                  color="inherit" 
                  className={`font-medium px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${isActive ? 'text-cyan-600 bg-cyan-50' : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-50'}`}
                >
                  {t(item.label)}
                </Button>
              );
            })}
          </div>

          {/* Right side Authentication / Actions */}
          <div className="flex items-center gap-3 ml-4">
            <IconButton onClick={toggleLanguage} color="primary" className="border border-cyan-100 bg-cyan-50/50 hover:bg-cyan-100 transition-colors" size="small">
              <Globe size={18} className="text-cyan-600" />
              <span className="text-xs font-bold ml-1 text-cyan-700 uppercase">
                {i18n?.language || 'EN'}
              </span>
            </IconButton>
            <Button variant="outlined" color="primary" className="hidden sm:flex rounded-full px-5 py-2 border-cyan-200 text-cyan-600 hover:bg-cyan-50 font-bold text-sm transition-colors">
              {t('layout.login')}
            </Button>
            <Button variant="contained" color="primary" className="hidden xl:flex rounded-full px-6 py-2 shadow-md shadow-cyan-500/20 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 font-bold text-sm !text-white whitespace-nowrap transition-transform hover:scale-105">
              {t('layout.contact')}
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
