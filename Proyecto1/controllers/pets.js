const Pet = require('../models/pet');


exports.postAddPet = (req, res, next) => {
  const name = req.body.name;
  const refugee = req.body.refugee;
  const city = req.body.city;
  const available = req.body.available;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const pet = new Pet(null, name, refugee, city, available, price, imageUrl, null, description);
  pet
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.getAvailablePets = (req, res, next) => {
    Pet.fetchAvailable()
      .then(([rows]) => {
        res.render('index', {
          pets: rows,
          pageTitle: 'Pagina Principal',
          path: '/'
        });
      })
      .catch(err => console.log(err));
};
  

exports.getAddPets = (req, res, next) => {
  res.render('add-pets', {
    pageTitle: 'Add Pet',
    path: '/add-pets',
  });
};


  exports.getEditPet = (req, res, next) => {
    const petId = req.params.petId;
    Pet.findById(petId)
    .then(([row]) => {
      res.render('edit-pet', {
        pageTitle: 'Edita tu mascota',
        pet : row[0]
      })     
    })
    .catch(err => console.log(err));
  }

  exports.postEditPet = (req, res, next) => {
    const id = req.params.petId;
    const name = req.body.name;
    const refugee = req.body.refugee;
    const city = req.body.city;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    console.log(name, refugee, city, price, imageUrl, description, id);
    Pet.updatePet(name, refugee, city, price, imageUrl, description, id)
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
  };

  exports.postDeletePet = (req, res, next) => {
    const id = req.params.petId;
    Pet.deleteById(id)
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
  };

  exports.postRentPet = (req, res, next) => {
    const id = req.params.petId;
    console.log(id);
    const interval = req.body.interval;
    console.log(interval);
    Pet.rentPet(interval, id)
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
  };
  exports.getRentPet = (req, res, next) => {
    const petId = req.params.petId;
    Pet.findById(petId)
    .then(([row]) => {
      res.render('rent-pet', {
        pageTitle: 'Alquila la mascota',
        pet : row[0]
      })     
    })
    .catch(err => console.log(err));
  }
/*
  exports.postDeletePet = (req, res, next) => {
    Pet.deleteById(id)
      .then(([rows]) => {
        res.render('index', {
          pets: rows,
          pageTitle: 'Pagina Principal',
          path: '/'
        });
      })
      .catch(err => console.log(err));
  };
  */
/*
  exports.postRentPet = (req, res, next) => {
    Pet.fetchAll()
      .then(([rows]) => {
        res.render('index', {
          pets: rows,
          pageTitle: 'Pagina Principal',
          path: '/'
        });
      })
      .catch(err => console.log(err));
  }; 
  exports.getPets = (req, res, next) => {
    Pet.fetchAll()
      .then(([rows]) => {
        res.render('index', {
          pets: rows,
          pageTitle: 'Pagina Principal',
          path: '/'
        });
      })
      .catch(err => console.log(err));
  };

  exports.getPets = (req, res, next) => {
    Pet.fetchAll()
      .then(([rows]) => {
        res.render('index', {
          pets: rows,
          pageTitle: 'Pagina Principal',
          path: '/'
        });
      })
      .catch(err => console.log(err));
  };

  exports.getPets = (req, res, next) => {
    Pet.fetchAll()
      .then(([rows]) => {
        res.render('index', {
          pets: rows,
          pageTitle: 'Pagina Principal',
          path: '/'
        });
      })
      .catch(err => console.log(err));
  };

  exports.getPets = (req, res, next) => {
    Pet.fetchAll()
      .then(([rows]) => {
        res.render('index', {
          pets: rows,
          pageTitle: 'Pagina Principal',
          path: '/'
        });
      })
      .catch(err => console.log(err));
  };*/