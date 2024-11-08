export const idlFactory = ({ IDL }) => {
  const Song = IDL.Record({
    'title' : IDL.Text,
    'difficulty' : IDL.Text,
    'notes' : IDL.Text,
  });
  return IDL.Service({
    'getSongs' : IDL.Func([], [IDL.Vec(Song)], ['query']),
    'getTechniques' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'getTips' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
