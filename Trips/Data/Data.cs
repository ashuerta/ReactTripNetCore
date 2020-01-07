using System;
using System.Collections.Generic;

namespace Trips.Data
{
    public static class Data 
    {
        public static List<Trip> Trips => allTrips;

        static List<Trip> allTrips = new List<Trip>()
        {
            new Trip()
            {
                Id = 1,
                Name = "Vienna, Austria",
                Description = "Vienna, is one the most beautiful cities in Austria",
                DateStarted = new DateTime(2019, 01, 10),
                DateCompleted = null
            },
            new Trip()
            {
                Id = 2,
                Name = "Monterrey, Mexico",
                Description = "Monterrey, is one the most beautiful cities in Mexico",
                DateStarted = new DateTime(2019, 02, 15),
                DateCompleted = null
            },
            new Trip()
            {
                Id = 3,
                Name = "Guadalajara, Mexico",
                Description = "Guadalajara, is the second beautiful cities in Mexico",
                DateStarted = new DateTime(2019, 03, 01),
                DateCompleted = null
            }

        };
    }
}