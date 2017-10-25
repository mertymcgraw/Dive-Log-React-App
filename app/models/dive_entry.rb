class DiveEntry < ApplicationRecord

  def random_image
    image_array = ["images/manta.png", "images/komodo.png", "images/nudi.png", "images/blue_hole.png", "images/manta2.png", "images/butterfly.png", "images/giant_stride.png", "images/manta.png", "images/reef.png"]
    image_array.sample
  end 

end
