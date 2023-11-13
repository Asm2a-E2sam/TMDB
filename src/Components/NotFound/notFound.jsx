function NotFound(){
    return(
        <>
            <div className="py-4 px-5">
                <h4 className="py-2">{`Oops! We can't find the page you're looking for`}</h4>
                <p className="pb-5">{`You tried to request a page that doesn't exist. If you believe this to be in error, let us know `}<span className="text-primary" role="button">on the forums</span>.</p>
            </div>
        </>
    )
}
export default NotFound