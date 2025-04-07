import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Separator } from "../../components/ui/separator";

export const Objectives = (): JSX.Element => {
  // Campaign steps data
  const campaignSteps = [
    { id: 1, name: "Campaign creation", isActive: true, isCompleted: true },
    {
      id: 1,
      subSteps: [
        { name: "Objectives", isActive: true },
        { name: "Landing page", isActive: false },
        { name: "Audiences", isActive: false },
        { name: "Target cost", isActive: false },
        { name: "Budget", isActive: false },
        { name: "Ads", isActive: false },
      ],
    },
    { id: 2, name: "Review & Submit", isActive: false, isCompleted: false },
    { id: 3, name: "Payment", isActive: false, isCompleted: false },
    {
      id: 4,
      name: "Tracking & Conversions",
      isActive: false,
      isCompleted: false,
    },
  ];

  // Advertising goals data
  const [advertisingGoals, setAdvertisingGoals] = useState([
    {
      id: "lead-generation",
      title: "Lead generation",
      description: "Drive leads, such as email signups.",
      icon: "https://c.animaapp.com/m971dpl3KVqfjC/img/email.svg",
      selected: true,
    },
    {
      id: "online-purchases",
      title: "Online purchases",
      description: "Get people to buy your products.",
      icon: "https://c.animaapp.com/m971dpl3KVqfjC/img/shopping-cart.svg",
      selected: false,
    },
    {
      id: "website-engagement",
      title: "Website engagement",
      description: "Increase user engagement and pageviews.",
      icon: "https://c.animaapp.com/m971dpl3KVqfjC/img/remove-red-eye.svg",
      selected: false,
    },
    {
      id: "brand-awareness",
      title: "Brand awareness",
      description: "Increase awareness of your brand.",
      icon: "https://c.animaapp.com/m971dpl3KVqfjC/img/campaign.svg",
      selected: false,
    },
    {
      id: "app-promotion",
      title: "App promotion",
      description: "Get people to install your app.",
      icon: "https://c.animaapp.com/m971dpl3KVqfjC/img/ad-units.svg",
      selected: false,
    },
  ]);

  const handleGoalSelection = (selectedId: string) => {
    setAdvertisingGoals(
      advertisingGoals.map((goal) => ({
        ...goal,
        selected: goal.id === selectedId,
      }))
    );
  };

  return (
    <main className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="flex h-[60px] items-center p-5 bg-[#1d4488] w-full">
        <div className="relative w-[75.71px] h-5">
          <img
            className="absolute w-[69px] h-[18px] top-px left-px"
            alt="Logo"
            src="https://c.animaapp.com/m971dpl3KVqfjC/img/group.png"
          />
          <img
            className="absolute w-[3px] h-2 top-[9px] left-[72px]"
            alt="Vector"
            src="https://c.animaapp.com/m971dpl3KVqfjC/img/vector.svg"
          />
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Left sidebar */}
        <aside className="flex flex-col w-[213px] h-full p-6 bg-white border-r border-[#d4d9df] relative">
          <img
            className="absolute w-[45px] h-[45px] top-[43px] left-[191px]"
            alt="Arrow"
            src="https://c.animaapp.com/m971dpl3KVqfjC/img/arrow.svg"
          />

          <div className="flex flex-col h-full gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                {/* Campaign creation step */}
                <div className="flex h-9 items-center gap-2">
                  <Badge
                    variant="outline"
                    className="flex items-center justify-center w-6 h-6 rounded-full border-[1.5px] border-blue px-[7px] py-0"
                  >
                    <span className="font-medium text-blue text-xs">1</span>
                  </Badge>
                  <span className="font-medium text-gray-9 text-sm">
                    Campaign creation
                  </span>
                </div>

                {/* Sub-steps */}
                <div className="flex flex-col">
                  {/* Vertical line with dot for Objectives */}
                  <div className="flex h-6 items-center px-[11px]">
                    <div className="bg-blue w-0.5 self-stretch" />
                  </div>
                  <div className="flex items-center gap-2 pl-[5px]">
                    <div className="flex items-center justify-center w-3.5 h-3.5 rounded-[20px]">
                      <div className="w-2 h-2 bg-blue rounded" />
                    </div>
                    <span className="font-bold text-blue text-sm">
                      Objectives
                    </span>
                  </div>

                  {/* Remaining sub-steps */}
                  {campaignSteps[1].subSteps.slice(1).map((step, index) => (
                    <React.Fragment key={index}>
                      <div className="flex h-8 items-center px-[11px]">
                        <div className="bg-gray-6 w-0.5 self-stretch" />
                      </div>
                      <div className="flex items-center gap-2 pl-[5px]">
                        <div className="flex items-center justify-center w-3.5 h-3.5 rounded-[20px]">
                          <div className="w-2 h-2 bg-gray-6 rounded" />
                        </div>
                        <span className="font-normal text-gray-6 text-sm">
                          {step.name}
                        </span>
                      </div>
                    </React.Fragment>
                  ))}

                  <div className="flex h-6 items-center px-[11px]">
                    <div className="bg-gray-6 w-0.5 self-stretch" />
                  </div>
                </div>

                {/* Remaining main steps */}
                <div className="flex flex-col gap-2">
                  {campaignSteps.slice(2).map((step) => (
                    <div key={step.id} className="flex h-9 items-center gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center justify-center w-6 h-6 rounded-full border border-[#667686] px-[7px] py-0"
                      >
                        <span className="font-normal text-gray-7 text-xs">
                          {step.id}
                        </span>
                      </Badge>
                      <span className="font-normal text-gray-7 text-sm">
                        {step.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tip card */}
          <div className="flex items-center gap-2 p-4 mt-auto rounded-md border-[1.5px] border-[#8051e3]">
            <img
              className="w-6 h-6"
              alt="Lightbulb"
              src="https://c.animaapp.com/m971dpl3KVqfjC/img/lightbulb.svg"
            />
            <div className="text-base">
              <span className="font-medium text-[#212832]">Tip: </span>
              <span className="text-[#4b545f]">Conversion rules</span>
            </div>
          </div>
        </aside>

        {/* Main content area */}
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-center flex-1">
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-col items-center gap-8">
                {/* Heading */}
                <div className="flex flex-col items-center gap-4">
                  <h1 className="font-28-bold text-gray-9 text-[28px] font-bold">
                    What is your primary advertising goal?
                  </h1>
                  <p className="font-20-regular text-gray-7 text-[20px] text-center">
                    Select your campaign goal
                  </p>
                </div>

                {/* Goal selection */}
                <RadioGroup
                  defaultValue="lead-generation"
                  className="flex flex-col gap-4 w-full"
                  onValueChange={handleGoalSelection}
                >
                  {advertisingGoals.map((goal) => (
                    <Card
                      key={goal.id}
                      className={`border-2 transition-colors duration-200 ${
                        goal.selected
                          ? "border-[#00CB84]"
                          : "border-[#d4d9df] hover:border-[#9CA8B5]"
                      }`}
                    >
                      <CardContent className="p-4 h-[72px] flex items-center justify-between">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-1.5">
                            <RadioGroupItem
                              value={goal.id}
                              id={goal.id}
                              className="w-4 h-4"
                              checked={goal.selected}
                            />
                            <label
                              htmlFor={goal.id}
                              className={`font-semibold text-base ${
                                goal.selected ? "text-gray-9" : "text-gray-7"
                              }`}
                            >
                              {goal.title}
                            </label>
                          </div>
                          <div className="flex">
                            <div className="w-[21px] h-3.5" />
                            <p className="text-gray-8 text-sm leading-4">
                              {goal.description}
                            </p>
                          </div>
                        </div>
                        <div className="w-10 h-10 bg-[#edf3fd] rounded-md flex items-center justify-center">
                          <img
                            className="w-6 h-6"
                            alt={goal.title}
                            src={goal.icon}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="h-[71px] bg-white relative">
            <Separator className="absolute w-full top-0" />
            <div className="flex justify-between items-center h-full px-4">
              <Button
                variant="ghost"
                className="flex items-center gap-0.5 pl-2 pr-4 py-2"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span className="font-medium text-gray-7 text-sm tracking-[0.5px]">
                  Back
                </span>
              </Button>
              <Button className="bg-blue hover:bg-blue/90 px-4 py-2">
                <span className="font-medium text-white text-sm tracking-[0.5px]">
                  Next
                </span>
              </Button>
            </div>
          </footer>
        </div>

        {/* Right sidebar */}
        <aside className="w-[430px] h-full bg-light-blue border-l border-[#d4d9df] flex items-center justify-center">
          <img
            className="w-[430px] h-[430px]"
            alt="Illustration"
            src="https://c.animaapp.com/m971dpl3KVqfjC/img/layer-1.png"
          />
        </aside>
      </div>
    </main>
  );
};
