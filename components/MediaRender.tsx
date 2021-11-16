
const Audio = (props: { src: string }) => {
    return <audio controls src={props.src} className="w-full max-w-sm whitespace-normal" />;
};

const Image = (props: { src: string }) => {
    return <img src={props.src} className="w-full max-w-sm whitespace-normal" />;
};

const Video = (props: { src: string }) => {
    return <video controls src={props.src} className="w-full max-w-sm whitespace-normal" />;
};

const MediaRender = (props: { block: any, contentState: any }) => {
    const entity = props.contentState.getEntity(
        props.block.getEntityAt(0)
    );
    const { src } = entity.getData();
    const type = entity.getType();

    let media;
    if (type === 'audio') {
        media = <Audio src={src} />;
    } else if (type === 'image') {
        media = <Image src={src} />;
    } else if (type === 'video') {
        media = <Video src={src} />;
    }

    return media;
};

export default MediaRender