
import { useState, useEffect, createContext, useContext } from 'react';

interface AdminUser {
  id: string;
  email: string;
  role: 'admin';
}

interface AdminAuthContextType {
  user: AdminUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | null>(null);

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing admin session
    const adminToken = localStorage.getItem('admin_token');
    const adminUser = localStorage.getItem('admin_user');
    
    if (adminToken && adminUser) {
      try {
        setUser(JSON.parse(adminUser));
      } catch (error) {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock admin authentication - replace with real auth later
    if (email === 'admin@gentlepath.com' && password === 'admin123') {
      const adminUser: AdminUser = {
        id: '1',
        email: 'admin@gentlepath.com',
        role: 'admin'
      };
      
      localStorage.setItem('admin_token', 'mock_admin_token');
      localStorage.setItem('admin_user', JSON.stringify(adminUser));
      setUser(adminUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    setUser(null);
  };

  return (
    <AdminAuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
