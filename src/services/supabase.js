import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yoigcwehwbxyyhjcnafn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvaWdjd2Vod2J4eXloamNuYWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM0NzI4MjIsImV4cCI6MjAxOTA0ODgyMn0.FGnqREjckGGY-auBvxGzJJhr95-mI91i0w_aq-OggiE";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
