import { supabase } from '../utils/supabaseClient';

export const loginUser = async (email: string, password: string): Promise<string | null> => {
  const { error } = await supabase.auth.signInWithPasswordCredentials({ email, password });
  if (error) {
    return (error as Error).message;
  }
  return null;
};

export const signUpUser = async (email: string, password: string): Promise<string | null> => {
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) {
    return (error as Error).message;
  }
  return null;
};

export const signOutUser = async (): Promise<string | null> => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return (error as Error).message;
  }
  return null;
};
