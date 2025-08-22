// Simple adaptive recommendation logic
function getRecommendations(level, interest) {
  const data = {
    beginner: {
      coding: ["CodeCombat Basics", "Scratch Projects", "Blockly Games"],
      math: ["Khan Academy Basics", "Prodigy Math", "Math Playground"]
    },
    intermediate: {
      coding: ["LeetCode Easy", "Frontend Mentor", "JavaScript30"],
      math: ["Brilliant.org", "Desmos Challenges", "Art of Problem Solving"]
    },
    advanced: {
      coding: ["LeetCode Hard", "System Design Primer", "Project Euler"],
      math: ["Putnam Problems", "Advanced Number Theory", "Machine Learning Math"]
    }
  };

  return data[level]?.[interest] || ["No recommendations found"];
}

module.exports = { getRecommendations };
