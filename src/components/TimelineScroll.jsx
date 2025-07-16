import { Icon } from '@iconify/react';
import { processData } from '../constant/data';

const TimelineScroll = () => {
  // Process icons mapping
  const processIcons = {
    '🔍': 'fluent:search-sparkle-24-filled',
    '📐': 'fluent:design-ideas-24-filled',
    '💻': 'fluent:code-24-filled',
    '✅': 'fluent:checkmark-circle-24-filled',
    '🚀': 'fluent:rocket-24-filled'
  };

  // Phase number icons
  const phaseIcons = {
    '01': 'fluent:number-circle-1-24-filled',
    '02': 'fluent:number-circle-2-24-filled',
    '03': 'fluent:number-circle-3-24-filled',
    '04': 'fluent:number-circle-4-24-filled',
    '05': 'fluent:number-circle-5-24-filled'
  };

  const TimelineCard = ({ step, index, isLeftSide }) => (
    <div className="relative group max-w-md w-full">
      <div 
        className="relative rounded-2xl p-8 bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl border cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        style={{
          borderColor: 'rgba(255,255,255,0.1)'
        }}
      >
        {/* Phase badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
          style={{
            background: 'linear-gradient(135deg, rgba(27,77,255,0.2), rgba(0,212,255,0.2))',
            border: '1px solid rgba(27,77,255,0.3)'
          }}
        >
          <Icon icon={phaseIcons[step.phase] || 'fluent:number-circle-1-24-filled'} className="w-4 h-4 text-primary" />
          <span className="text-primary">PHASE {step.phase}</span>
        </div>

        {/* Icon and title */}
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5"
          >
            <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
              <Icon icon={processIcons[step.icon] || 'fluent:sparkle-24-filled'} className="w-7 h-7 text-white" />
            </div>
          </div>
          <h3 className="font-bold text-2xl text-white">
            {step.title}
          </h3>
        </div>

        {/* Description */}
        <p className="mb-6 text-base text-gray-300 leading-relaxed">
          {step.description}
        </p>

        {/* Duration */}
        <div className="flex items-center gap-3 mb-6">
          <Icon icon="fluent:clock-24-filled" className="w-5 h-5 text-primary" />
          <span className="text-sm text-gray-400">Duration:</span>
          <span className="text-sm font-medium text-white">
            {step.duration}
          </span>
        </div>

        {/* Deliverables */}
        <div className="space-y-3">
          <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider flex items-center gap-2">
            <Icon icon="fluent:clipboard-task-list-24-filled" className="w-4 h-4 text-primary" />
            Key Deliverables
          </h4>
          <div className="flex flex-wrap gap-2">
            {step.deliverables.map((deliverable, idx) => (
              <span 
                key={idx}
                className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-gray-300 hover:border-primary/40 transition-colors duration-300"
              >
                {deliverable}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="process"
      className="relative py-16 md:py-24 lg:py-32 bg-black"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
              <Icon icon="fluent:task-list-square-sparkle-24-filled" className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Development Process</span>
            </div>
          </div>

          <h2 
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: '1.1'
            }}
          >
            <span className="text-white">How We </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Build Success
            </span>
          </h2>
          <p 
            className="text-lg md:text-xl px-4 max-w-3xl mx-auto text-gray-400"
          >
            From concept to deployment, we follow a proven methodology that ensures quality at every step
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center line for desktop */}
          <div 
            className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 hidden md:block"
            style={{
              width: '2px',
              background: 'linear-gradient(to bottom, #1B4DFF 0%, #00D4FF 100%)'
            }}
          />

          {/* Mobile line */}
          <div 
            className="absolute left-8 top-0 bottom-0 md:hidden"
            style={{
              width: '2px',
              background: 'linear-gradient(to bottom, #1B4DFF 0%, #00D4FF 100%)'
            }}
          />

          {/* Steps */}
          <div className="space-y-8 md:space-y-16">
            {processData.map((step, index) => {
              const isLeftSide = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative"
                >
                  {/* Desktop layout */}
                  <div className="hidden md:block">
                    <div className="flex items-center relative">
                      {isLeftSide ? (
                        <>
                          <div className="w-1/2 pr-8 flex justify-end">
                            <TimelineCard step={step} index={index} isLeftSide={true} />
                          </div>
                          
                          {/* Timeline dot */}
                          <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent" />
                          </div>
                          
                          <div className="w-1/2 pl-8"></div>
                        </>
                      ) : (
                        <>
                          <div className="w-1/2 pr-8"></div>
                          
                          {/* Timeline dot */}
                          <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent" />
                          </div>
                          
                          <div className="w-1/2 pl-8 flex justify-start">
                            <TimelineCard step={step} index={index} isLeftSide={false} />
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden pl-16 w-full">
                    <div className="relative group">
                      <div 
                        className="relative rounded-xl p-6 bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl border"
                        style={{
                          borderColor: 'rgba(255,255,255,0.1)'
                        }}
                      >
                        {/* Phase badge */}
                        <div 
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
                          style={{
                            background: 'linear-gradient(135deg, rgba(27,77,255,0.2), rgba(0,212,255,0.2))',
                            border: '1px solid rgba(27,77,255,0.3)'
                          }}
                        >
                          <Icon icon={phaseIcons[step.phase] || 'fluent:number-circle-1-24-filled'} className="w-3.5 h-3.5 text-primary" />
                          <span className="text-primary">PHASE {step.phase}</span>
                        </div>

                        {/* Icon and title */}
                        <div className="flex items-center gap-3 mb-4">
                          <div 
                            className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent p-0.5 flex-shrink-0"
                          >
                            <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                              <Icon icon={processIcons[step.icon] || 'fluent:sparkle-24-filled'} className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <h3 className="font-bold text-lg text-white">
                            {step.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="mb-4 text-sm text-gray-300 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Duration */}
                        <div className="flex items-center gap-2 mb-3">
                          <Icon icon="fluent:clock-16-filled" className="w-4 h-4 text-primary" />
                          <span className="text-xs text-white">{step.duration}</span>
                        </div>

                        {/* Deliverables */}
                        <div className="space-y-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-center gap-2 text-xs text-gray-300"
                            >
                              <div className="w-1 h-1 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mobile timeline dot */}
                    <div className="absolute left-8 top-8 transform -translate-x-1/2 z-20">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineScroll; 