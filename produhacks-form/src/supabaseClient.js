import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bfxqqvfewmonsybvmjrl.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeHFxdmZld21vbnN5YnZtanJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2Nzg1OTcsImV4cCI6MTk5MDI1NDU5N30.gBYV_Yc767QOhVh-Dw8PdTEHuMgx0UKD24yba4LM09Q";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
