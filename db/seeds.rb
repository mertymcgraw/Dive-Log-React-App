# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
DiveEntry.create([
  {location: "Koh Tao", dive_site: "Red Rock", time: 33, depth: 13, visibility: 18, notes: "working??", image: "images/komodo.png"},
  {location: "Koh Tao", dive_site: "Green Rock", time: 54, depth: 28, visibility: 20, notes: "whale shark", image: "images/nudi.png"},
  {location: "Koh Tao", dive_site: "Chumphon Pinnacle", time: 48, depth: 30, visibility: 30, notes: "turtle", image: "images/blue_hole.png"},
  {location: "Komodo", dive_site: "Batu Bolong", time: 47, depth: 18, visibility: 18, image: "images/manta2.png"},
  {location: "Koh Tao", dive_site: "Pottery", time: 45, depth: 13, visibility: 18, notes: "parrot fish", image: "images/butterfly.png"},
  {location: "Koh Tao", dive_site: "Green Rock", time: 54, depth: 28, visibility: 20, notes: "whale shark", image: "images/giant_stride.png"},
  {location: "Komodo", dive_site: "White Rock", time: 33, depth: 13, visibility: 18, notes: "working??", image: "images/manta.png"},
  {location: "Komodo", dive_site: "Manta Alley", time: 54, depth: 28, visibility: 20, notes: "whale shark", image: "images/reef.png"},
  ])