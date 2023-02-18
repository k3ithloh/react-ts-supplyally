import React from 'react';

const _TrackParcelPage = () => {
    return (
        <div>
            <h1>Tacking Parcel Page</h1>
        </div>
    );


};

const TrackParcelPage = React.memo(_TrackParcelPage);
export default TrackParcelPage;