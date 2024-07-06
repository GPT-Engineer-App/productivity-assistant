import { supabase } from "@/supabaseClient";

export const fetchMessages = async () => {
  const { data, error } = await supabase.from("messages").select("*");
  if (error) throw new Error(error.message);
  return data;
};

export const sendMessage = async (message) => {
  const { data, error } = await supabase.from("messages").insert([message]);
  if (error) throw new Error(error.message);
  return data;
};

export const deleteMessage = async (id) => {
  const { data, error } = await supabase.from("messages").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return data;
};