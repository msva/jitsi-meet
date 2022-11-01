import React from 'react';

import { IconDotsHorizontal } from '../../../base/icons/svg';
import Button from '../../../base/ui/components/web/Button';

type Props = {

    /**
     * Label used for accessibility.
     */
    accessibilityLabel: string;

    /**
     * Click handler function.
     */
    onClick: () => void;
};

const ParticipantActionEllipsis = ({ accessibilityLabel, onClick }: Props) => (
    <Button
        accessibilityLabel = { accessibilityLabel }
        icon = { IconDotsHorizontal }
        onClick = { onClick }
        size = 'small' />
);

export default ParticipantActionEllipsis;
