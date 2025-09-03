import SectionTitle from "@/components/Shared/SectionTitle";

export default function MissionAndVision() {
    return (
        <div className="md:grid grid-cols-2">
            <div className="col-span-1 ">
                <SectionTitle title="Mission" align="left" />
            </div>
            <div className="col-span-1 ">
                <SectionTitle title="Vision" align="left" />
            </div>
        </div>
    );
};
