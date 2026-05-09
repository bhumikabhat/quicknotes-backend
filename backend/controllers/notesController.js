const supabase = require("../config/supabaseClient");

exports.getNotes = async (req, res) => {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("user_id", req.user.id);

  res.json(data);
};

exports.createNote = async (req, res) => {
  const { title, content } = req.body;

  const { data, error } = await supabase
    .from("notes")
    .insert([
      {
        title,
        content,
        user_id: req.user.id,
      },
    ]);

  res.json(data);
};

exports.deleteNote = async (req, res) => {
  const { id } = req.params;

  await supabase.from("notes").delete().eq("id", id);

  res.json({ message: "Deleted" });
};