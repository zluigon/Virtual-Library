const Podcast = require("./Podcast");
const Media = require("./Media");
const Music = require("./Music");

describe("Podcast tests", () => {
  test("Can create a new Podcast instance that is a child of Music", () => {
    const podcast1 = new Podcast("The HorrorBabble Podcast", 2024, "Fiction", "HorrorBabble", 28, "Ian Gordon", "'Time-Fuse' by John Metcalfe", 389, [])
    expect(podcast1 instanceof Podcast).toBe(true);
    expect(podcast1 instanceof Music).toBe(true);})

    test("Adds new media to Media",() =>{
        const podcast2 = new Podcast("The HorrorBabble", 2024, "Fiction", "HorrorBabble", 30, "Ian Gordon", "'The Demon of the Flower' by Clark Ashton Smith", 384, [])
        expect(Media.ALL_MEDIA.length).toBe(2); // counts previous test media
    })
});
