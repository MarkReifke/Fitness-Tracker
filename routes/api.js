const router = require("express").Router();
const { Workout } = require("../models");

// api/workouts
router.get("/workouts", async function (req, res){
    try {
        const data = await Workout.aggregate([
          {
            $addFields: {
              totalDuration: {
                $sum: "exercises.duration",
              },
            },
          },
        ]);
        res.json(data);
      } catch (err) {

    
        res.status(500).send(err);
      }

});

router.put("/workouts:id", async function (req, res){
    try {
        const data = await Workout.updateOne(
          {
            id: req.params.id,
          },
          {
            $push: {
              exercises: req.body,
            },
          }
        );
        res.json(data);
      } catch (err) {

        res.json(err);
      }

});

router.post("/workouts", async function (req, res){
    try {
        const data = await Workout.create(req.body);
        res.json(data);
      } catch (err) {

        res.status(500).json(err);
      }

});

router.get("/workouts/range", async function (req, res){
    try {
        const data = await Workout.aggregate([
          { $limit: 6 },
          {
            $addFields: {
              totalDuration: {
                $sum: '$exercises.duration',
              },
              numExercises: {
                $sum: '$execises.name',
              },
              totalWeight: {
                $sum: '$exercises.pounds',
              },
              totalSets: {
                $sum: '$execises.sets'
              },
             totalReps: {
               $sum: '$exercises.rep',
             },
            totalDistance: {
              $sum: '$exercises.distance',
            },
            },
          },
        ]);
        res.json(data);
      } catch (err) {

        res.json(500).send(err);
      }
});

module.exports = router;