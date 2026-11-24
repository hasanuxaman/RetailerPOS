


function InfoCard({
    title,
    value,
    subtitle,
    icon: Icon,
    iconColor = "text-blue-600",
    iconBackground = "bg-blue-100"
}) {
    return (
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-slate-500">
                        {title}
                    </p>
                    <h2 className="text-2xl font-bold text-slate-800 mt-2">
                        {value}
                    </h2>
                </div>
                {subtitle && (
                    <p className="text-xs text-slate-500 mt-4">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>

    );
}
export default InfoCard;