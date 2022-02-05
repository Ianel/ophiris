import React, { useState } from 'react';
import Export from './Export';
import Import from './Import';

const ImportExport = () => {

    const [isImport, setIsImport] = useState(true);
    const [isExport, setIsExport] = useState(false);

  return (
        <section id="import" className='lg:mb-24 lg:mt-16'>
            <h2 className='lg:text-3xl font-bold lg:mb-6 text-center lg:mt-24 text-2xl mb-10'>Import &amp; Export</h2>
            <div className='flex lg:flex-row flex-col gap-3 justify-center items-center lg:gap-8'>
                <button onClick={() => {
                    setIsImport(true); setIsExport(false);
                }} className={`${isImport ? 'bg-primary text-white': null } w-64 py-2  hover:bg-primary hover:text-white border-2 border-primary text-primary lg:py-2 lg:px-4`}>Import</button>
                <button onClick={() => {
                    setIsImport(false); setIsExport(true);
                }} className={`${isExport ? 'bg-primary text-white': null } w-64 py-2  hover:bg-primary hover:text-white border-2 border-primary text-primary lg:py-2 lg:px-4`}>Export</button>
            </div>
            { isImport && <Import /> }
            { isExport && <Export /> }
        </section>
    );
};

export default ImportExport;
