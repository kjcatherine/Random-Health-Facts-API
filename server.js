const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

app.use(cors());

//JSON objects

let healthFacts = {
  1: {
    fact: "Optimism can make you live longer",
    description:
      "A good attitude may do more than just brighten your day. A series of studies confirmed that being a glass-half-full kind of person is associated with increased longevity. One 1999 study published in JAMA Internal Medicine revealed that optimistic patients who had undergone coronary artery bypass were half as likely to require re-hospitalization within the following six months as pessimistic patients.",
  },
  2: {
    fact: "Sitting up too straight can hurt your back",
    description:
      "Hunching can certainly hurt your back but the opposite is true as well. Sitting up straight for too long without a break can also cause strain. If you work in an office setting, make sure your chair is at a height where your knees are at a 90 degree angle, your feet can rest flat on the floor, and you have proper lower back support. Make sure to stand up, stretch, and take a quick walk several times a day to keep from getting stiff or causing injury.",
  },
  3: {
    fact: "Laughter is good for your heart.",
    decription:
      "It's well known fact that laughter can be a valuable coping tool for those suffering from medical conditions. It could also directly contribute to a healthier heart. A study shows that subjects over the age of 65 who reported laughing daily had drastically lower rates of cardiovascular disease and stroke.",
  },
  4: {
    fact: "Quitting smoking before 35 could save your life",
    description:
      "f you're a smoker, but not yet middle age, let this be your wakeup call: A 2002 report from the American Journal of Public Health suggests that roughly 90 percent of the increased mortality risk associated with smoking cigarettes can be stopped if a smoker quits before the age of 35. Past middle age and still hooked? You can still reap the benefits of increased longevity by quitting today.",
  },
  5: {
    fact: "Sugar is as bad for you as cigarettes.",
    description:
      " Just as cigarettes have long been linked to preventable mortality from cancer, heart disease, and stroke, researchers have increasingly found that consuming added sugar leads to similarly deadly conditions. According to a 2016 report in the journal Nutrients, too much sugar leads to a variety of chronic diseases including obesity, cardiovascular disease, diabetes and non-alcoholic fatty liver disease (NAFLD) as well as cognitive decline and even in some cancers.",
  },
  6: {
    fact: "We eat 600 more calories a day than people did in the 1970s.",
    description:
      "When we look back on the portraits of past generations, it's clear that Americans have, on average, gotten bigger. While this is likely due in part to the rise of fast food, hormones in meat and dairy products, chemical additives and preservatives, and the streamlining of physical labor, it also comes down to a staggering increase in the number of calories consumed. According to the U.S. Department of Health and Human Services, the average daily calories consumed has increased by approximately 600 calories since the 1970s.",
  },
  7: {
    fact: "Walking is nearly as healthy as running.",
    description:
      "if you've not got a lot of time to spend on a leisurely workout, try walking. One 2014 study published in the journal Arteriosclerosis, Thrombosis, and Vascular Biology found that brisk walking can be nearly as effective as running in lowering rates of hypertension, diabetes, and high cholesterol. The key is to maintain a pace that keeps your heart rate elevated and to cover the same distance as your running route—which, admittedly, could take a while.",
  },
  8: {
    fact: "Meditating is better for your mental health than a vacation.",
    description:
      " In 2018, researchers out of the Netherlands studied 91 female volunteers and divided them into three groups: those who were regular meditators, those who had never meditated, and those who would forgo meditation entirely in favor of a week-long vacation. The first two groups committed to 12 hours of mindfulness training over the course of a regular workweek, while the latter group of vacation participants engaged in health lectures and outdoor activities. While all three groups reported similar benefits of lowered stress and improved mood, the participants that continued meditating showed positive results 10 months later, while the vacationers returned to their normal states after their trips ended.",
  },
  9: {
    fact: "Your poor sleep habits can make you gain weight.",
    description:
      "Like eating well, staying hydrated, and keeping active, getting a good night's sleep should be at the top of your fitness checklist. A 2010 study published in the journal Environmental Health Perspectives found that not getting enough sleep, or maintaining an abnormal sleep schedule, is considered an independent risk factor for weight gain. This contributes to a cycle in which poor sleep practices lead to weight gain, which increases the likelihood of sleep apnea or other sleep disturbances, which, in turn, contributes to more weight gain.",
  },
  10: {
    fact: "Deep breathing may help you lose weight.",
    description:
      "According to the Mayo Clinic, fat leaves the body mostly via exhaled breath. A 2014 study in the journal Gastrointestinal Tracts found that 84 percent of fat is transformed into carbon dioxide and breathed out, while the remaining 16 percent becomes water, leaving your body through urine and sweat. Some fitness professionals argue that this means that deep breathing with attention to prolonged exhalation can help your body shed fat.",
  },
  0: {
    fact: "unknown",
    description: "unknown",
  },
};

//Main route
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

//Api route
app.get("/api/:name", (request, response) => {
  const factCheck = request.params.name.toLowerCase();
  if (healthFacts[factCheck]) {
    response.json(healthFacts[factCheck]);
  } else {
    response.json(healthFacts["0"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is now running on port 8000!");
});
