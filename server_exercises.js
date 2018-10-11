const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://sql7260491:77E6J8Rgwr@sql7.freesqldatabase.com:3306/sql7260491');

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     })
    const Movie = sequelize.define('movie', {
        m_name: {
            type: Sequelize.STRING
        }
    });
    const Actor = sequelize.define('actor', {
        a_name: {
            type: Sequelize.STRING
        }
    });
    const Director = sequelize.define('director', {
        d_name: {
            type: Sequelize.STRING
        }
    });
    const Movie_Actor = sequelize.define("Movie_Actor", {})

    Director.hasMany(Movie);
    Actor.belongsToMany(Movie, { through: Movie_Actor })
    Movie.belongsToMany(Actor, { through: Movie_Actor })
    
    // Director.sync();
    // Actor.sync();
    // Movie.sync();
    // Movie_Actor.sync();

    // Actor.create({
    //         a_name: "Ian McKellen"
    //     })


    // Director.create({
    //         d_name: "Rob Minkoff"   //id1
    // })
    // Director.create({
    //         d_name: "Peter Jackson"  //id2
    // })
       
    const addRelationship = async function () {
        let movie = await Movie.create({ m_name: "Lion King", directorId: 1})
        let actor = await Actor.create({ a_name: "Jeremy Irons" })
        movie.addActor(actor)
        Director.find({
        where: { id: 2 },
        include: [Movie]
    })
        // alternatively, could also do artist.addMovie(movie)
    }
    addRelationship()
   
    
    //#3 Find all the movies directed by Peter Jackson
    // Director.find({
    //     include: [Movie],
    //     where: {d_name: "Peter Jackson" }
        
    //   })
    //   .then(results => 
    //     results.movies.forEach(movie => {
    //         console.log(movie.dataValues.m_name) 
    //     }));
    //#4 Find all the movies in which Ian McKellen played
    // Movie.find({
    //     // include: [Movie],
    //     where: {actorId: 7 }
    //   })
    //   .then(results => 
    //    console.log(results));
       

   
