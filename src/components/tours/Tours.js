import React, { useState } from 'react';
import baobab from '../../assets/images/baobab.jpg';
import indri from '../../assets/images/indri.jpg';
import pearls from '../../assets/images/beach.jpg';
import wonders from '../../assets/images/isalo1.png';
import TourInfo from './TourInfo';

const Tours = () => {

    const [isBaobab, setIsBaobab] = useState(true);
    const [isIndri, setIsIndri] = useState(false);
    const [isPearl, setIsPearl] = useState(false);
    const [isWonder, setIsWonder] = useState(false);

    const descriptionOfTours = {
        baobab: `“Sanctuary of nature” and “ecological jewel”, are the adjectives 
            that qualify the natural wealth of Madagascar. The baobab, also called “Reniala” 
            (“mother of the forest”) in Malagasy, is a 100% secular Malagasy tree. There are eight 
            species on earth and six of them are endemic to the island. The baobab constitutes an important
            reserve of water which allows it to tolerate extreme climatic conditions. Because of its trunk
            filled with water, the baobab is also called “bottle tree”. You will admire the unique forest
            of baobab trees in the world and the most beautiful specimens in a wonderful scenery. `,
        indri: `Andasibe National Park contains a dense humid forest covered with lians, moss, fern
            tress and more than hundred orchids species. Another common plants growing here are pandanus, 
            ravinala palm-tree, tambourissa, bamboos and some precious wood, like palisander and ebano. 
            All the visitors within a mile of the park can hear the peculiar call of the indri very early 
            in the morning until noon and again in the late afternoon. Indris (called Babakoto in Malagay) 
            are the largest living lemurs. And the Malagasy palm trees are located in Ankanin’ny Nofy 
            including Dypsis and Lemurophoenix. The area represents one of the most beautiful sites along 
            the pangalanes canal where you will discover some endemic lemus: indris, black and white ruffed 
            lemurs 
            and aye-ayes can all be found here and are completely comfortable being close to visitors.`,
        pearl: `Nosy Be perfumed Island is the pearl of the Indian Ocean located in the north western of 
            the mainland. You will admire the most beautiful beaches of Madagascar
            then uncountable endemic fauna and flora during your trip up to Diego Suarez. `,
        wonder: `The South of Madagascar is the most arid region of the island and also the most unique one 
            in terms of scenery and flora. This bushy extension is spattered with forest and it is the only place 
            on earth where travelers can admire the spiny forest, a semi-desert ecosystem formed by huge 
            cactus-like plants which only grow here. 
            The route along the southern coast is full up of huge white-sanded and almost empty beaches. `
    }

  return (
        <div className='lg:mx-10 mb-24' id="tours">
            <h2 className='lg:text-3xl text-center lg:mt-24 lg:mb-8 mt-20 mb-4 font-bold text-2xl'>Our tour packages</h2>
            <div className='flex lg:flex-row flex-col gap-3 justify-center items-center lg:gap-8'>
                <button onClick={() => {
                    setIsBaobab(true); setIsIndri(false); setIsPearl(false); setIsWonder(false);
                }} className={`${isBaobab ? 'bg-primary text-white' : null} w-64 py-2  hover:bg-primary hover:text-white border-2 border-primary text-primary lg:py-2 lg:px-4`}>Baobab Tour</button>
                <button onClick={() => {
                    setIsBaobab(false); setIsIndri(true); setIsPearl(false); setIsWonder(false);
                }} className={`${isIndri ? 'bg-primary text-white' : null}  w-64 py-2 hover:bg-primary hover:text-white border-2 border-primary text-primary lg:py-2 lg:px-4`}>Indri Tour</button>
                <button onClick={() => {
                    setIsBaobab(false); setIsIndri(false); setIsPearl(true); setIsWonder(false);
                }} className={`${isPearl ? 'bg-primary text-white' : null}  w-64 py-2 hover:bg-primary hover:text-white border-2 border-primary text-primary lg:py-2 lg:px-4`}>Pearls Tour</button>
                <button onClick={() => {
                    setIsBaobab(false); setIsIndri(false); setIsPearl(false); setIsWonder(true);
                }} className={`${isWonder ? 'bg-primary text-white' : null} w-64 py-2  hover:bg-primary hover:text-white border-2 border-primary text-primary lg:py-2 lg:px-4`}>Wonders Tour</button>
            </div>
            {
                isBaobab && <TourInfo tourTitle="Baobab" tourDescription={descriptionOfTours.baobab} tourDuration="7d/6n"
                    tourPrice="950" tourImage={baobab} />
            }  
            {
                isIndri && <TourInfo tourTitle="Indri" tourDescription={descriptionOfTours.indri} tourDuration="8d/7n"
                    tourPrice="1075" tourImage={indri} />
            }    
            {
                isPearl && <TourInfo tourTitle="Pearls" tourDescription={descriptionOfTours.pearl} tourDuration="8d/7n"
                    tourPrice="1750" tourImage={pearls} />
            }    
            {
                isWonder && <TourInfo tourTitle="Wonders" tourDescription={descriptionOfTours.wonder} tourDuration="10d/9n"
                    tourPrice="1675" tourImage={wonders} />
            }      
        </div>
    );
};

export default Tours;
