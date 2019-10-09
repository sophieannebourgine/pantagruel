// Route to get all countries
router.get('/', (req, res, next) => {
  Reservation.find()
    .then(reservation => {
      res.json(reservation)
    })
    .catch(err => next(err))
})

module.exports = router
