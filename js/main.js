//Arrays
let worstfates = ['The future concerns only those who will be there; focus upon the present, lest you fail to meet the future.', 'The fates rarely agree on the future, but they can agree on this: your future looks bleak.', 'The Red Thread travels far and sees wide, but knows not the destination where you have inquired.', 'It would be disadvantageous to continue this line of inquiry, unless one seeks what lies beyond the horizon.', 'Your outcome looks as bleak as the wings of Icarus.'];

let semibadfates = ['Life is filled to the brim with obstacles: it is how you rebound that determines the direction of your thread of fate.', 'Better decisions could be made, but it is hard to look a gift horse in the mouth.', 'An alternative approach may be in order for what you seek.', 'Now is not the time for doubt; resolve your will or else what you seek will forever remain ourside your reach.', 'Be mindful of whom you share important details, lest the squeaky wheel be the fall of your chariot.'];

let semigoodfates = ['The fates wish to remind you: just as stress and pressure makes gems out of earth, so to do they make strength out of determination.', 'You are well on your way; just be certain to not allow minor inconveniences stray you from your path.', 'Looking forward is the way to get through life, but that does not mean it is wrong to take a moment to look back at how far you have come, and how much you have grown.', 'Reality is what you make of it: so long as you continue to pursue your dreams, you will awake to a brighter world.', 'Let not the darkness of the past cloud the infinite and unrivaled beauty of the unknown future.'];

let bestfates = ['What you seek, surely you shall find on the road that you are traveling, so press on, and be confident in the choices that have led you this far.', 'Cherish the times you spend with the people upon your path, for they will create the memories that will guide you through to your dreams and desires.', 'Be mindful of your heart, and listen to it well, for it shall bring your before that which you seek.', 'Life is a boundless journey of growth and experience; be grateful for all that crossed your path to make you the person that stands where you stand today.', 'It is often said that karma will catch up to all, and without doubt, the seeds of your determination will blossom into an indescribable future.'];

let fatedimages = ['worstfates/FourHorsemen.jpeg', 'worstfates/Dystopian.jpeg', 'worstfates/Reddeath.png', 'worstfates/Wasteland.jpeg', 'worstfates/HellonEarth.jpeg', 'semibad/Arrival.jpeg', 'semibad/Deathangel.jpeg', 'semibad/Firegirl.jpeg', 'semibad/Prism.jpeg', 'semibad/YinYang.png', 'semigood/Dreamer.jpeg', 'semigood/Homecoming.jpeg', 'semigood/Keyhole.jpeg', 'semigood/Oceanside.jpeg', 'semigood/Stairway2.jpeg', 'bestfates/city.jpeg', 'bestfates/HandsofCreation.jpeg', 'bestfates/SkySailing.jpeg', 'bestfates/Skyward.jpeg', 'bestfates/Wonder.jpeg'];

//Constants
const clicker = document.getElementsByClassName('bttn');
const imgid = document.getElementById("imgr");
const dest = document.getElementById('destiny');
const asker = document.getElementById('ask');
const parent = document.getElementsByClassName('parents');

//Events
clicker[0].addEventListener("click", clickfunc);

//Functions
function clickfunc(){
    let fatedchoice = Math.floor(fatedimages.length * Math.random());
    let fate = fatedimages[fatedchoice];
    imgid.src = `images/${fate}`;
    imgid.classList.remove('hidden');
    imgid.height = "750";
    imgid.width = "750";
    let unmei;
    if (fatedchoice <= 4){
        unmei = Math.floor(worstfates.length * Math.random());
        dest.innerHTML = worstfates[unmei];
    } else if (fatedchoice > 4 && fatedchoice <= 9){
        unmei = Math.floor(semibadfates.length * Math.random());
        dest.innerHTML= semibadfates[unmei];
    } else if (fatedchoice > 9 && fatedchoice <= 14){
        unmei = Math.floor(semigoodfates.length * Math.random());
        dest.innerHTML = semigoodfates[unmei];
    } else if (fatedchoice > 14){
        unmei = Math.floor(bestfates.length * Math.random());
        dest.innerHTML = bestfates[unmei];
    }
    console.log(asker.value);
    parent[0].classList.add("parentdiv");
    parent[0].innerHTML = asker.value;
}
