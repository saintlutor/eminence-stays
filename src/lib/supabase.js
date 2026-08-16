import { createClient } from "@supabase/supabase-js";

// Publishable key — safe to ship client-side; access is governed by RLS
// (eminence_enquiries: insert-only for anon, no read/update/delete).
const SUPABASE_URL = "https://gfmjqwgbtramqrizebfp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_mKVgSusMD01nK5xV_UU1PA_ZxTkm491";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
