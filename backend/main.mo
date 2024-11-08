import Int "mo:base/Int";

import Array "mo:base/Array";
import Text "mo:base/Text";

actor PianoLearner {
  type Song = {
    title: Text;
    notes: Text;
    difficulty: Text;
  };

  stable var tips : [Text] = [
    "Practice regularly, even if it's just for 15 minutes a day.",
    "Start with simple songs and gradually increase difficulty.",
    "Focus on proper hand positioning and posture.",
    "Learn to read sheet music alongside playing by ear.",
    "Use a metronome to improve your timing and rhythm."
  ];

  stable var techniques : [Text] = [
    "Practice scales and arpeggios to build finger strength and dexterity.",
    "Use finger exercises to improve independence between fingers.",
    "Learn proper pedal technique for sustain and expression.",
    "Practice sight-reading to improve your ability to play new pieces.",
    "Work on your dynamics to add expression to your playing."
  ];

  stable var songs : [Song] = [
    {
      title = "Twinkle Twinkle Little Star";
      notes = "C C G G A A G F F E E D D C";
      difficulty = "Beginner";
    },
    {
      title = "Ode to Joy";
      notes = "E E F G G F E D C C D E E D D";
      difficulty = "Beginner";
    },
    {
      title = "Fur Elise";
      notes = "E D# E D# E B D C A";
      difficulty = "Intermediate";
    }
  ];

  public query func getTips() : async [Text] {
    tips
  };

  public query func getTechniques() : async [Text] {
    techniques
  };

  public query func getSongs() : async [Song] {
    songs
  };
}
