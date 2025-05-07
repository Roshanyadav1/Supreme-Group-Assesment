import { Images, Videos } from "../../../assets";

export type VehicleType = "passenger" | "commercial";

export interface FeatureItem {
    title: string;
    image: string;
    video: string;
}

export interface UseFeatureSectionReturn {
    type: VehicleType;
    setType: (type: VehicleType) => void;
    features: FeatureItem[];
}


export const FeaturedData: Record<VehicleType, FeatureItem[]> = {
    passenger: [
        { title: "Complete body", image: Images.PassengerFullBodyImg, video: Videos.PassengerFrontVideo },
        { title: "Cabin", image: Images.PassengerCabinImg, video: Videos.PassengerCabinVideo },
        { title: "Trunk", image: Images.PassengerTrunkImg, video: Videos.PassengerTrunkVideo },
        { title: "Exterior", image: Images.PassengerExteriorImg, video: Videos.PassengerExteriorVideo },
    ],
    commercial: [
        { title: "Complete body", image: Images.CommercialFullBodyImg, video: Videos.CommercialFullBodyVideo }
    ],
};